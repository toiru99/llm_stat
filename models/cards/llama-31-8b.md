---
type: Model
title: Llama 3.1 8B
creator: Meta
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.038
output_speed_tps: 140.0
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 13.5, z: -1.36, r: 29.7, estimated: false }  # 전문 지식
  reasoning: { s: 8.4, z: -1.29, r: 30.6, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.2, r: 31.9, estimated: false }  # 코딩
  agentic: { s: 5.9, z: -1.26, r: 31.1, estimated: false }  # 에이전트
  trust: { s: 56.7, z: 1.38, r: 70.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.2, z: -0.96, r: 35.6, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.28, r: 30.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-13
timestamp: 2026-10-13T00:00:00Z
---

# Llama 3.1 8B

Meta · Open · Small · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.04 · 출력 $0.07 · 혼합 $0.038/1M · 140.0 t/s · TTFT 0.87s · 128k ctx` · 가성비 184.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.7 | -1.36 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 26.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.6 | -1.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 26.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.9 | -1.2 | 실측 | [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 31.1 | -1.26 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 16.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 70.6 | +1.38 | 실측 | [[aa-omniscience]] 57.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.6 | -0.96 | 실측 | [[aa-lcr]] 18.0%×1.0 |
| 지시 따르기 | 30.9 | -1.28 | 실측 | [[ifbench]] 29.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
