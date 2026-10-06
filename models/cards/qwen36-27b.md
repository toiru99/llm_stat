---
type: Model
title: Qwen3.6 27B
creator: Alibaba
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.9
output_speed_tps: 56.0
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 44.3, z: 0.08, r: 51.2, estimated: false }  # 전문 지식
  reasoning: { s: 41.9, z: 0.25, r: 53.7, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.73, r: 60.9, estimated: false }  # 코딩
  agentic: { s: 54.2, z: 0.59, r: 58.8, estimated: false }  # 에이전트
  trust: { s: 50.5, z: 1.11, r: 66.7, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.54, r: 58.1, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.02, r: 65.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Qwen3.6 27B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 56.0 t/s · TTFT 3.69s · 262k ctx` · 가성비 23.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.2 | +0.08 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 53.7 | +0.25 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 60.9 | +0.73 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 58.8 | +0.59 | 실측 | [[gdpval]] 24.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 17.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 66.7 | +1.11 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 58.1 | +0.54 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
