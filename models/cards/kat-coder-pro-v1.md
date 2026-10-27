---
type: Model
title: KAT-Coder-Pro V1
creator: KwaiKAT
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.6, z: 0.02, r: 50.3, estimated: false }  # 전문 지식
  reasoning: { s: 43.9, z: 0.3, r: 54.5, estimated: false }  # 추론
  coding: { s: 13.6, z: -0.82, r: 37.7, estimated: false }  # 코딩
  agentic: { s: 26.3, z: -0.29, r: 45.6, estimated: false }  # 에이전트
  trust: { s: 32.0, z: 0.21, r: 53.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 43.8, z: -0.27, r: 45.9, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.04, r: 65.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — KAT-Coder-Pro V1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# KAT-Coder-Pro V1

KwaiKAT · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.3 | +0.02 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 54.5 | +0.3 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 37.7 | -0.82 | 실측 | [[terminal-bench]] 9.0%×0.5 |
| 에이전트 | 45.6 | -0.29 | 실측 | [[gdpval]] 731.0%×1.0, [[terminal-bench]] 9.0%×1.0 |
| 신뢰성 | 53.2 | +0.21 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.9 | -0.27 | 실측 | [[aa-lcr]] 39.0%×1.0 |
| 지시 따르기 | 65.7 | +1.04 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
