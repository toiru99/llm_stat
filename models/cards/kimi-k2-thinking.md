---
type: Model
title: Kimi K2 Thinking
creator: Kimi
license: Open
intelligence_index: 33.0
price_blended_usd_1m: 0.79
output_speed_tps: 159.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.3, z: 0.78, r: 61.7, estimated: false }  # 전문 지식
  reasoning: { s: 46.0, z: 0.67, r: 60.0, estimated: false }  # 추론
  coding: { s: 62.3, z: 0.7, r: 60.5, estimated: false }  # 코딩
  agentic: { s: 70.5, z: 1.34, r: 70.1, estimated: false }  # 에이전트
  trust: { s: 31.8, z: 0.19, r: 52.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.1, r: 66.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2 Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Kimi K2 Thinking

Kimi · Open · Unknown · 컨텍스트 256k · 종합지능 **33.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $2.5 · 혼합 $0.79/1M · 159.0 t/s · TTFT 1.22s · 256k ctx` · 가성비 41.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.7 | +0.78 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 60.0 | +0.67 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 60.5 | +0.7 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 70.1 | +1.34 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 52.9 | +0.19 | 실측 | [[aa-omniscience]] 28.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
