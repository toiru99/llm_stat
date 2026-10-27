---
type: Model
title: Kimi K2 Thinking
creator: Kimi
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.79
output_speed_tps: 121.0
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.2, z: 0.51, r: 57.7, estimated: false }  # 전문 지식
  reasoning: { s: 44.5, z: 0.33, r: 54.9, estimated: false }  # 추론
  coding: { s: 47.0, z: 0.31, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 47.0, z: 0.42, r: 56.3, estimated: false }  # 에이전트
  trust: { s: 22.7, z: -0.21, r: 46.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.04, r: 65.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2 Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Kimi K2 Thinking

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $2.5 · 혼합 $0.79/1M · 121.0 t/s · TTFT 1.92s · 256k ctx` · 가성비 27.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.7 | +0.51 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 54.9 | +0.33 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 54.6 | +0.31 | 실측 | [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 56.3 | +0.42 | 실측 | [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 46.9 | -0.21 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 65.6 | +1.04 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
