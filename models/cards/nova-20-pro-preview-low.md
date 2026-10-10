---
type: Model
title: Nova 2.0 Pro Preview (low)
creator: Amazon
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 2.125
output_speed_tps: 119.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 38.3, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 25.8, z: -0.38, r: 44.3, estimated: false }  # 코딩
  agentic: { s: 39.2, z: 0.01, r: 50.1, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.76, r: 38.6, estimated: false }  # 신뢰성
  multimodal: { s: 65.8, z: -0.28, r: 45.7, estimated: false }  # 멀티모달
  long_context: { s: 73.0, z: 0.64, r: 59.5, estimated: false }  # 긴문맥
  instruction: { s: 95.8, z: 1.73, r: 75.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Nova 2.0 Pro Preview (low)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.125/1M · 119.0 t/s · TTFT 7.89s · 256k ctx` · 가성비 6.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 44.3 | -0.38 | 실측 | [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 50.1 | +0.01 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 38.6 | -0.76 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 45.7 | -0.28 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 59.5 | +0.64 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 75.9 | +1.73 | 실측 | [[ifbench]] 80.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
