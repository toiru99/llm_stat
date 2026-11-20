---
type: Model
title: GPT-5.2 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: 57.1711682216383
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.7, z: -0.13, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.4, r: 43.9, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 38.8, z: -0.21, r: 46.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.15, r: 47.8, estimated: false }  # 멀티모달
  long_context: { s: 51.5, z: -0.06, r: 49.1, estimated: false }  # 긴문맥
  instruction: { s: 49.6, z: -0.18, r: 47.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# GPT-5.2 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 57.1711682216383 t/s · TTFT 2.3710356717597s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.13 | 실측 | [[gpqa-diamond]] 71.2121212121212%×0.4, [[humanitys-last-exam]] 8.01668211306766%×0.3 |
| 추론 | 43.9 | -0.4 | 실측 | [[critpt]] 0.571428571428571%×1.0, [[gpqa-diamond]] 71.2121212121212%×1.0, [[humanitys-last-exam]] 8.01668211306766%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 31.818181818181802%×0.5 |
| 에이전트 | 46.9 | -0.21 | 실측 | [[tau2-bench]] 46.4912280701754%×1.0, [[tau3-banking]] 11.1340206185567%×1.0, [[terminal-bench]] 31.818181818181802%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.8 | -0.15 | 실측 | [[mmmu-pro]] 65.8381502890173%×1.0 |
| 긴문맥 | 49.1 | -0.06 | 실측 | [[aa-lcr]] 45.6666666666667%×1.0 |
| 지시 따르기 | 47.3 | -0.18 | 실측 | [[ifbench]] 47.414965986394606%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
