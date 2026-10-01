---
type: Model
title: Nova 2.0 Pro Preview (non-reasoning)
creator: Amazon
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: 2.125
output_speed_tps: 108.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.6, z: -0.55, r: 41.7, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.63, r: 40.6, estimated: false }  # 추론
  coding: { s: 25.8, z: -0.36, r: 44.6, estimated: false }  # 코딩
  agentic: { s: 32.8, z: -0.22, r: 46.6, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.38, r: 44.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 33.7, z: -0.54, r: 41.9, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.09, r: 51.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nova 2.0 Pro Preview (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Nova 2.0 Pro Preview (non-reasoning)

Amazon · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $2.125/1M · 108.0 t/s · TTFT 1.07s · 256k ctx` · 가성비 4.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.7 | -0.55 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.6 | -0.63 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.6 | -0.36 | 실측 | [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 46.6 | -0.22 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 72.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 44.4 | -0.38 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.9 | -0.54 | 실측 | [[aa-lcr]] 30.0%×1.0 |
| 지시 따르기 | 51.3 | +0.09 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
