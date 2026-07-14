---
type: Model
title: KAT-Coder-Pro V2
creator: KwaiKAT
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 0.22
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.7, z: 0.31, r: 54.6, estimated: false }  # 전문 지식
  reasoning: { s: 39.4, z: 0.31, r: 54.7, estimated: false }  # 추론
  coding: { s: 67.0, z: 0.88, r: 63.3, estimated: false }  # 코딩
  agentic: { s: 53.5, z: 0.68, r: 60.2, estimated: false }  # 에이전트
  trust: { s: 50.6, z: 1.08, r: 66.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.04, r: 65.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — KAT-Coder-Pro V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# KAT-Coder-Pro V2

KwaiKAT · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.22/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 154.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.6 | +0.31 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 54.7 | +0.31 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 63.3 | +0.88 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 49.0%×0.5 |
| 에이전트 | 60.2 | +0.68 | 실측 | [[gdpval]] 20.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 49.0%×1.0 |
| 신뢰성 | 66.2 | +1.08 | 실측 | [[aa-omniscience]] 44.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 65.6 | +1.04 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
