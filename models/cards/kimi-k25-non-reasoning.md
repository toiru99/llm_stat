---
type: Model
title: Kimi K2.5 (non-reasoning)
creator: Kimi
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.84
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.5, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 34.5, z: -0.1, r: 48.5, estimated: false }  # 추론
  coding: { s: 28.8, z: -0.27, r: 45.9, estimated: false }  # 코딩
  agentic: { s: 55.3, z: 0.62, r: 59.3, estimated: false }  # 에이전트
  trust: { s: 49.5, z: 1.05, r: 65.8, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.4, r: 56.0, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.7, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.39, r: 44.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Kimi K2.5 (non-reasoning)

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.6 · 출력 $3.0 · 혼합 $0.84/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 22.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 48.5 | -0.1 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 45.9 | -0.27 | 실측 | [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 59.3 | +0.62 | 실측 | [[tau2-bench]] 81.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | 65.8 | +1.05 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 56.0 | +0.4 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 60.6 | +0.7 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 44.1 | -0.39 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
