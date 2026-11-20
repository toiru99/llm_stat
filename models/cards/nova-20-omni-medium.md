---
type: Model
title: Nova 2.0 Omni (medium)
creator: Amazon
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.2, z: -0.01, r: 49.9, estimated: false }  # 전문 지식
  reasoning: { s: 28.2, z: -0.36, r: 44.5, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.12, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 44.0, z: -0.03, r: 49.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.2, z: -0.42, r: 43.7, estimated: false }  # 멀티모달
  long_context: { s: 67.3, z: 0.41, r: 56.1, estimated: false }  # 긴문맥
  instruction: { s: 75.9, z: 0.92, r: 63.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Nova 2.0 Omni (medium)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.9 | -0.01 | 실측 | [[gpqa-diamond]] 75.9595959595959%×0.4, [[humanitys-last-exam]] 6.95088044485635%×0.3 |
| 추론 | 44.5 | -0.36 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.9595959595959%×1.0, [[humanitys-last-exam]] 6.95088044485635%×1.0 |
| 코딩 | 33.1 | -1.12 | 실측 | [[terminal-bench]] 4.545454545454549%×0.5 |
| 에이전트 | 49.6 | -0.03 | 실측 | [[tau2-bench]] 80.4093567251462%×1.0, [[terminal-bench]] 4.545454545454549%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.7 | -0.42 | 실측 | [[mmmu-pro]] 61.9075144508671%×1.0 |
| 긴문맥 | 56.1 | +0.41 | 실측 | [[aa-lcr]] 59.6666666666667%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 실측 | [[ifbench]] 66.1904761904762%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
