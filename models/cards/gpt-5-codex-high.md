---
type: Model
title: GPT-5 Codex (high)
creator: OpenAI
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 1.3375
output_speed_tps: 200.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.4, z: 0.89, r: 63.4, estimated: false }  # 전문 지식
  reasoning: { s: 48.7, z: 0.52, r: 57.8, estimated: false }  # 추론
  coding: { s: 57.6, z: 0.66, r: 60.0, estimated: false }  # 코딩
  agentic: { s: 57.6, z: 0.79, r: 61.8, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.16, r: 47.6, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.43, r: 56.5, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.4, r: 71.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 Codex (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-5 Codex (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **25.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 200.0 t/s · TTFT 10.95s · 400k ctx` · 가성비 18.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.4 | +0.89 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 57.8 | +0.52 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 60.0 | +0.66 | 실측 | [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 61.8 | +0.79 | 실측 | [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 47.6 | -0.16 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | 56.5 | +0.43 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 71.1 | +1.4 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
