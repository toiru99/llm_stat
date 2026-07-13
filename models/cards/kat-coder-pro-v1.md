---
type: Model
title: KAT-Coder-Pro V1
creator: KwaiKAT
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 0.22
output_speed_tps: 104.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 45.0, z: 0.23, r: 53.4, estimated: false }  # 전문 지식
  reasoning: { s: 46.7, z: 0.7, r: 60.5, estimated: false }  # 추론
  coding: { s: 45.7, z: -0.01, r: 49.8, estimated: false }  # 코딩
  agentic: { s: 38.4, z: 0.09, r: 51.3, estimated: false }  # 에이전트
  trust: { s: 37.6, z: 0.46, r: 56.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.45, r: 71.8, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.09, r: 66.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — KAT-Coder-Pro V1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# KAT-Coder-Pro V1

KwaiKAT · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.22/1M · 104.0 t/s · TTFT 1.42s · 256k ctx` · 가성비 159.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.4 | +0.23 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 60.5 | +0.7 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 49.8 | -0.01 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 9.0%×0.5 |
| 에이전트 | 51.3 | +0.09 | 실측 | [[gdpval]] 20.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 9.0%×1.0 |
| 신뢰성 | 56.8 | +0.46 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 71.8 | +1.45 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
