---
type: Model
title: GPT-5.1 Codex (high)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: None
output_speed_tps: 200.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.0, z: 1.22, r: 68.3, estimated: false }  # 전문 지식
  reasoning: { s: 50.5, z: 0.87, r: 63.1, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.66, r: 59.9, estimated: false }  # 코딩
  agentic: { s: 68.4, z: 1.24, r: 68.6, estimated: false }  # 에이전트
  trust: { s: 29.4, z: 0.07, r: 51.1, estimated: false }  # 신뢰성
  multimodal: { s: 82.6, z: 0.51, r: 57.7, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.2, r: 67.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 Codex (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# GPT-5.1 Codex (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **35.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $None/1M · 200.0 t/s · TTFT 6.02s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.3 | +1.22 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 63.1 | +0.87 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 59.9 | +0.66 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 68.6 | +1.24 | 실측 | [[tau2-bench]] 83.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 51.1 | +0.07 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 57.7 | +0.51 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 67.9 | +1.2 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
