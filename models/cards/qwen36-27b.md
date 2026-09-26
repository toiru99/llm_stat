---
type: Model
title: Qwen3.6 27B
creator: Alibaba
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.9
output_speed_tps: 59.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.3, z: 0.12, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 41.9, z: 0.3, r: 54.5, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.79, r: 61.8, estimated: false }  # 코딩
  agentic: { s: 54.3, z: 0.64, r: 59.6, estimated: false }  # 에이전트
  trust: { s: 50.5, z: 1.16, r: 67.4, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.59, r: 58.9, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.1, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.05, r: 65.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Qwen3.6 27B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 59.0 t/s · TTFT 3.64s · 262k ctx` · 가성비 23.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.12 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 54.5 | +0.3 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 61.8 | +0.79 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 59.6 | +0.64 | 실측 | [[gdpval]] 24.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 17.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 67.4 | +1.16 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 58.9 | +0.59 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 66.4 | +1.1 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 65.8 | +1.05 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
