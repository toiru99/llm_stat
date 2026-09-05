---
type: Model
title: Nova 2.0 Omni (medium)
creator: Amazon
license: Proprietary
intelligence_index: 15.0
price_blended_usd_1m: 0.52
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.7, z: -0.25, r: 46.2, estimated: false }  # 전문 지식
  reasoning: { s: 29.0, z: -0.29, r: 45.6, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.86, r: 37.1, estimated: false }  # 코딩
  agentic: { s: 44.2, z: 0.26, r: 53.9, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 65.3, z: -0.24, r: 46.4, estimated: false }  # 멀티모달
  long_context: { s: 67.4, z: 0.56, r: 58.5, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Omni (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Nova 2.0 Omni (medium)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 28.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.2 | -0.25 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.6 | -0.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 37.1 | -0.86 | 실측 | [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 53.9 | +0.26 | 실측 | [[tau2-bench]] 80.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 46.4 | -0.24 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 58.5 | +0.56 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
