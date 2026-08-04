"""build_cards.py 파생 함수 단위 테스트 (표준 라이브러리 unittest)."""
import sys, pathlib, unittest
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent.parent / "scripts"))
from build_cards import (  # noqa: E402
    size_bucket, price_bucket, status_of, blended_from_columns, resolve_price,
)


class TestDerivations(unittest.TestCase):
    def test_size_bucket(self):
        self.assertEqual(size_bucket("tiny"), "Tiny")
        self.assertEqual(size_bucket("small"), "Small")
        self.assertEqual(size_bucket("medium"), "Medium")
        self.assertEqual(size_bucket("large"), "Large")
        self.assertEqual(size_bucket(None), "Unknown")     # 독점모델 비공개
        self.assertEqual(size_bucket("weird"), "Unknown")  # 미지 값 방어

    def test_price_bucket_boundaries(self):
        self.assertIsNone(price_bucket(None))
        self.assertEqual(price_bucket(0.0), "Low")
        self.assertEqual(price_bucket(0.14), "Low")
        self.assertEqual(price_bucket(0.15), "Medium")   # 경계: 0.15는 Medium
        self.assertEqual(price_bucket(1.0), "Medium")    # 경계: 1.0은 Medium
        self.assertEqual(price_bucket(1.01), "High")

    def test_price_bucket_prefers_aa_class(self):
        """AA가 priceClass를 주면 자체 임계값보다 그쪽이 우선 (필터 정의 변경에 자동 추종)."""
        self.assertEqual(price_bucket(9.99, "low"), "Low")
        self.assertEqual(price_bucket(0.01, "high"), "High")
        self.assertEqual(price_bucket(0.5, "medium"), "Medium")

    def test_price_bucket_falls_back_when_class_missing(self):
        """조인 실패로 priceClass가 없으면 혼합가 임계값으로 계산."""
        self.assertEqual(price_bucket(0.10, None), "Low")
        self.assertEqual(price_bucket(2.0, None), "High")
        self.assertEqual(price_bucket(2.0, "weird"), "High")  # 미지 클래스도 임계값 폴백
        self.assertIsNone(price_bucket(None, None))

    def test_blended_from_columns(self):
        """AA 혼합가 = (7×캐시히트 + 2×입력 + 1×출력) / 10."""
        # Claude Sonnet 5 (max): 캐시 0.20 · 입력 2 · 출력 10 → 실측 표시가 $1.54
        self.assertAlmostEqual(blended_from_columns(0.20, 2.0, 10.0), 1.54, places=4)
        # GLM-4.5V: 캐시가 없으면 입력가로 대체 → (7×0.6 + 1.2 + 1.8)/10 = 0.72
        self.assertAlmostEqual(blended_from_columns(None, 0.6, 1.8), 0.72, places=4)
        # 무료 모델
        self.assertEqual(blended_from_columns(0.0, 0.0, 0.0), 0.0)

    def test_blended_from_columns_needs_input_and_output(self):
        self.assertIsNone(blended_from_columns(0.2, None, 10.0))
        self.assertIsNone(blended_from_columns(0.2, 2.0, None))

    def test_resolve_price_prefers_embedded_value(self):
        """임베드 원본값이 있으면 그대로 (반올림된 표 값으로 재계산하지 않음)."""
        self.assertEqual(resolve_price(0.702, 0.0, 0.95, 4.0), 0.702)

    def test_resolve_price_falls_back_to_columns(self):
        """조인이 비면 표 컬럼으로 재계산 — 가격이 통째로 사라지지 않게."""
        self.assertAlmostEqual(resolve_price(None, 0.20, 2.0, 10.0), 1.54, places=4)

    def test_resolve_price_none_when_nothing_available(self):
        self.assertIsNone(resolve_price(None, None, None, None))

    def test_resolve_price_strips_float_noise(self):
        """임베드 원본은 0.7020000000000001 같은 값을 준다 — 카드/화면에 그대로 새면 안 됨."""
        self.assertEqual(resolve_price(0.7020000000000001, None, None, None), 0.702)
        self.assertEqual(resolve_price(None, None, 0.6, 1.8), 0.72)

    def test_status_of(self):
        self.assertEqual(status_of(True), "past")
        self.assertEqual(status_of(False), "current")
        self.assertEqual(status_of(None), "current")     # 조인 실패는 current 취급


if __name__ == "__main__":
    unittest.main()
