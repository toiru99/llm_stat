---
type: Model
title: KAT-Coder-Pro V1
creator: KwaiKAT
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.7, z: 0.17, r: 52.5, estimated: false }  # 전문 지식
  reasoning: { s: 46.3, z: 0.53, r: 58.0, estimated: false }  # 추론
  coding: { s: 45.7, z: -0.1, r: 48.4, estimated: false }  # 코딩
  agentic: { s: 44.5, z: 0.31, r: 54.6, estimated: false }  # 에이전트
  trust: { s: 36.0, z: 0.4, r: 55.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.6, z: -0.17, r: 47.4, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.0, r: 65.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — KAT-Coder-Pro V1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# KAT-Coder-Pro V1

KwaiKAT · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **29.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.5 | +0.17 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 58.0 | +0.53 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 48.4 | -0.1 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 9.0%×0.5 |
| 에이전트 | 54.6 | +0.31 | 실측 | [[gdpval]] 20.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[terminal-bench]] 9.0%×1.0 |
| 신뢰성 | 55.9 | +0.4 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.4 | -0.17 | 실측 | [[aa-lcr]] 37.0%×1.0 |
| 지시 따르기 | 65.0 | +1.0 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
