---
type: Model
title: Qwen3 Max Thinking (Preview)
creator: Alibaba
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: None
output_speed_tps: 55.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.3, z: 0.38, r: 55.6, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: -0.02, r: 49.7, estimated: false }  # 추론
  coding: { s: 51.9, z: 0.21, r: 53.1, estimated: false }  # 코딩
  agentic: { s: 55.3, z: 0.74, r: 61.0, estimated: false }  # 에이전트
  trust: { s: 9.2, z: -0.9, r: 36.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.79, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.25, r: 53.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max Thinking (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Qwen3 Max Thinking (Preview)

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **25.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.2 · 출력 $6.0 · 혼합 $None/1M · 55.0 t/s · TTFT 4.06s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.6 | +0.38 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 49.7 | -0.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 53.1 | +0.21 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 61.0 | +0.74 | 실측 | [[tau2-bench]] 84.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 36.5 | -0.9 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.9 | +0.79 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 53.8 | +0.25 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
