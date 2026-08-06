---
type: Model
title: GPT-5 Codex (high)
creator: OpenAI
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 1.3375
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.5, z: 1.18, r: 67.7, estimated: false }  # 전문 지식
  reasoning: { s: 50.6, z: 0.79, r: 61.9, estimated: false }  # 추론
  coding: { s: 64.7, z: 0.72, r: 60.8, estimated: false }  # 코딩
  agentic: { s: 72.7, z: 1.48, r: 72.2, estimated: false }  # 에이전트
  trust: { s: 28.7, z: 0.0, r: 50.0, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.6, r: 59.0, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.4, r: 71.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 Codex (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# GPT-5 Codex (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **36.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · None t/s · TTFT Nones · 400k ctx` · 가성비 26.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.7 | +1.18 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 61.9 | +0.79 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 60.8 | +0.72 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 72.2 | +1.48 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 50.0 | +0.0 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 59.0 | +0.6 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 71.1 | +1.4 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
