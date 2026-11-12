---
type: Model
title: Qwen3.6 27B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.9
output_speed_tps: None
context_window: 262000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 62.0, z: 0.73, r: 60.9, estimated: false }  # 전문 지식
  reasoning: { s: 58.0, z: 0.73, r: 61.0, estimated: false }  # 추론
  coding: { s: 57.0, z: 0.65, r: 59.7, estimated: false }  # 코딩
  agentic: { s: 46.1, z: 0.38, r: 55.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.1, z: 0.49, r: 57.3, estimated: false }  # 멀티모달
  long_context: { s: 87.1, z: 1.02, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 77.9, z: 1.08, r: 66.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Qwen3.6 27B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.9 | +0.73 | 실측 | [[gpqa-diamond]] 84.2%×0.4, [[humanitys-last-exam]] 23.1%×0.3 |
| 추론 | 61.0 | +0.73 | 실측 | [[gpqa-diamond]] 84.2%×1.0, [[humanitys-last-exam]] 23.1%×1.0 |
| 코딩 | 59.7 | +0.65 | 실측 | [[scicode]] 42.8%×1.0, [[terminal-bench]] 34.8%×0.5 |
| 에이전트 | 55.8 | +0.38 | 실측 | [[gdpval]] 993.0%×1.0, [[tau3-banking]] 16.7%×1.0, [[terminal-bench]] 34.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.3 | +0.49 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 65.4 | +1.02 | 실측 | [[aa-lcr]] 77.3%×1.0 |
| 지시 따르기 | 66.3 | +1.08 | 실측 | [[ifbench]] 67.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
