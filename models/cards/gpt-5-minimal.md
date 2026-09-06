---
type: Model
title: GPT-5 (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: 1.3375
output_speed_tps: 87.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.5, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 25.0, z: -0.49, r: 42.7, estimated: false }  # 추론
  coding: { s: 27.3, z: -0.17, r: 47.4, estimated: false }  # 코딩
  agentic: { s: 47.5, z: 0.38, r: 55.7, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: 65.3, z: -0.24, r: 46.4, estimated: false }  # 멀티모달
  long_context: { s: 62.7, z: 0.42, r: 56.3, estimated: true }  # 긴문맥
  instruction: { s: 47.9, z: -0.2, r: 47.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5 (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 87.0 t/s · TTFT 1.29s · 400k ctx` · 가성비 8.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.7 | -0.49 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 47.4 | -0.17 | 실측 | [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 55.7 | +0.38 | 실측 | [[tau2-bench]] 67.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 46.4 | -0.24 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 56.3 | +0.42 | 추정 | (추정) |
| 지시 따르기 | 47.0 | -0.2 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
