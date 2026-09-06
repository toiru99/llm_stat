---
type: Model
title: Kimi K2.5
creator: Kimi
license: Open
intelligence_index: 28.0
price_blended_usd_1m: 0.64
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 61.2, z: 0.98, r: 64.7, estimated: false }  # 전문 지식
  reasoning: { s: 50.6, z: 0.75, r: 61.2, estimated: false }  # 추론
  coding: { s: 53.0, z: 0.73, r: 60.9, estimated: false }  # 코딩
  agentic: { s: 47.2, z: 0.37, r: 55.6, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.4, r: 56.0, estimated: false }  # 신뢰성
  multimodal: { s: 83.3, z: 0.65, r: 59.8, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.21, r: 68.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Kimi K2.5

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.6 · 출력 $2.75 · 혼합 $0.64/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 43.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.7 | +0.98 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 61.2 | +0.75 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 60.9 | +0.73 | 실측 | [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 55.6 | +0.37 | 실측 | [[apex-agents]] 12.0%×1.0, [[gdpval]] 22.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 56.0 | +0.4 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | 59.8 | +0.65 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
