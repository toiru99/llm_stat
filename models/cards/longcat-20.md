---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: None
price_blended_usd_1m: 0.4555
output_speed_tps: 53.6082657847846
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 64.2, z: 0.84, r: 62.7, estimated: false }  # 전문 지식
  reasoning: { s: 43.5, z: 0.42, r: 56.2, estimated: false }  # 추론
  coding: { s: 48.4, z: 0.25, r: 53.7, estimated: false }  # 코딩
  agentic: { s: 40.9, z: -0.22, r: 46.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.3, z: 0.48, r: 57.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $2.95 · 혼합 $0.4555/1M · 53.6082657847846 t/s · TTFT 3.67048571050999s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.7 | +0.84 | 실측 | [[gpqa-diamond]] 77.9798%×0.4, [[humanitys-last-exam]] 33.6886%×0.3 |
| 추론 | 56.2 | +0.42 | 실측 | [[critpt]] 2.57143%×1.0, [[gpqa-diamond]] 77.9798%×1.0, [[humanitys-last-exam]] 33.6886%×1.0 |
| 코딩 | 53.7 | +0.25 | 실측 | [[scicode]] 36.3426%×1.0 |
| 에이전트 | 46.7 | -0.22 | 실측 | [[gdpval]] 876.1 Elo×1.0, [[tau3-banking]] 13.1959%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.2 | +0.48 | 실측 | [[aa-lcr]] 65%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
