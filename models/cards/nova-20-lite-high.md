---
type: Model
title: Nova 2.0 Lite (high)
creator: Amazon
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 0.52
output_speed_tps: 158.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.9, z: 0.02, r: 50.3, estimated: false }  # 전문 지식
  reasoning: { s: 34.6, z: 0.05, r: 50.7, estimated: false }  # 추론
  coding: { s: 49.7, z: 0.14, r: 52.2, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.18, r: 47.4, estimated: false }  # 에이전트
  trust: { s: 10.6, z: -0.81, r: 37.9, estimated: false }  # 신뢰성
  multimodal: { s: 71.0, z: -0.03, r: 49.6, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.7, r: 60.5, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.27, r: 69.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Lite (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Nova 2.0 Lite (high)

Amazon · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · 158.0 t/s · TTFT 16.02s · 1M ctx` · 가성비 34.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.3 | +0.02 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 50.7 | +0.05 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 52.2 | +0.14 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 47.4 | -0.18 | 실측 | [[gdpval]] 4.0%×1.0, [[tau2-bench]] 73.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 37.9 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 49.6 | -0.03 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 60.5 | +0.7 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
