---
type: Model
title: KAT-Coder-Pro V2
creator: KwaiKAT
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: 103.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.7, z: 0.26, r: 53.8, estimated: false }  # 전문 지식
  reasoning: { s: 39.4, z: 0.25, r: 53.7, estimated: false }  # 추론
  coding: { s: 67.0, z: 0.83, r: 62.5, estimated: false }  # 코딩
  agentic: { s: 52.8, z: 0.64, r: 59.6, estimated: false }  # 에이전트
  trust: { s: 49.4, z: 1.01, r: 65.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.01, r: 65.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — KAT-Coder-Pro V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# KAT-Coder-Pro V2

KwaiKAT · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $None/1M · 103.0 t/s · TTFT 1.52s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.8 | +0.26 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 53.7 | +0.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 62.5 | +0.83 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 49.0%×0.5 |
| 에이전트 | 59.6 | +0.64 | 실측 | [[gdpval]] 20.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 49.0%×1.0 |
| 신뢰성 | 65.1 | +1.01 | 실측 | [[aa-omniscience]] 44.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 65.1 | +1.01 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
