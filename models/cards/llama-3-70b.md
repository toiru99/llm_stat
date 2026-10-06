---
type: Model
title: Llama 3 70B
creator: Meta
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.86
output_speed_tps: None
context_window: 8189
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.6, z: -0.83, r: 37.6, estimated: false }  # 전문 지식
  reasoning: { s: 13.1, z: -1.06, r: 34.0, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.2, r: 32.0, estimated: false }  # 코딩
  agentic: { s: 0.8, z: -1.46, r: 28.2, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.75, r: 38.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.56, r: 26.6, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.8, r: 38.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Llama 3 70B

Meta · Open · Medium · 컨텍스트 8k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.65 · 출력 $2.75 · 혼합 $0.86/1M · None t/s · TTFT Nones · 8k ctx` · 가성비 5.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.6 | -0.83 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.0 | -1.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.0 | -1.2 | 실측 | [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 28.2 | -1.46 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 38.7 | -0.75 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.6 | -1.56 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 38.1 | -0.8 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
