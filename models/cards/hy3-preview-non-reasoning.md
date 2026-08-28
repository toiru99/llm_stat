---
type: Model
title: Hy3-preview (Non-reasoning)
creator: Tencent
license: Open
intelligence_index: 27.0
price_blended_usd_1m: 0.0483
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: 295
is_reasoning: false
radar:
  knowledge: { s: 40.2, z: -0.02, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 28.4, z: -0.31, r: 45.4, estimated: false }  # 추론
  coding: { s: 59.5, z: 0.5, r: 57.5, estimated: false }  # 코딩
  agentic: { s: 58.6, z: 0.85, r: 62.8, estimated: false }  # 에이전트
  trust: { s: 22.7, z: -0.07, r: 49.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.07, r: 48.9, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.07, r: 49.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3-preview (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Hy3-preview (Non-reasoning)

Tencent · Open · Large(295B) · 컨텍스트 256k · 종합지능 **27.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.06 · 출력 $0.21 · 혼합 $0.0483/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 559.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.02 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.4 | -0.31 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 57.5 | +0.5 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 62.8 | +0.85 | 실측 | [[tau2-bench]] 68.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 49.0 | -0.07 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.9 | -0.07 | 실측 | [[aa-lcr]] 39.0%×1.0 |
| 지시 따르기 | 49.0 | -0.07 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
