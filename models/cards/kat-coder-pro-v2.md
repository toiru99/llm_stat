---
type: Model
title: KAT-Coder-Pro V2
creator: KwaiKAT
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 0.222
output_speed_tps: 105.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.3, z: 0.17, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 39.0, z: 0.21, r: 53.1, estimated: false }  # 추론
  coding: { s: 67.0, z: 0.82, r: 62.2, estimated: false }  # 코딩
  agentic: { s: 51.4, z: 0.62, r: 59.4, estimated: false }  # 에이전트
  trust: { s: 48.8, z: 1.03, r: 65.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — KAT-Coder-Pro V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# KAT-Coder-Pro V2

KwaiKAT · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 105.0 t/s · TTFT 1.69s · 256k ctx` · 가성비 153.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.17 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 53.1 | +0.21 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 62.2 | +0.82 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 49.0%×0.5 |
| 에이전트 | 59.4 | +0.62 | 실측 | [[gdpval]] 20.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 49.0%×1.0 |
| 신뢰성 | 65.5 | +1.03 | 실측 | [[aa-omniscience]] 44.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
