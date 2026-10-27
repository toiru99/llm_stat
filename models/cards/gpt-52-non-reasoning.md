---
type: Model
title: GPT-5.2 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 1.8725
output_speed_tps: 71.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.0, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 28.5, z: -0.39, r: 44.1, estimated: false }  # 추론
  coding: { s: 48.5, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 35.0, z: 0.01, r: 50.1, estimated: false }  # 에이전트
  trust: { s: 37.1, z: 0.45, r: 56.7, estimated: false }  # 신뢰성
  multimodal: { s: 69.9, z: -0.12, r: 48.3, estimated: false }  # 멀티모달
  long_context: { s: 51.7, z: -0.04, r: 49.4, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.22, r: 46.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-5.2 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 71.0 t/s · TTFT 0.78s · 400k ctx` · 가성비 9.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 44.1 | -0.39 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 50.1 | +0.01 | 실측 | [[tau3-banking]] 11.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 56.7 | +0.45 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | 48.3 | -0.12 | 실측 | [[mmmu-pro]] 66.0%×1.0 |
| 긴문맥 | 49.4 | -0.04 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 46.7 | -0.22 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
