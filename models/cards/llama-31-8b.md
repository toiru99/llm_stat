---
type: Model
title: Llama 3.1 8B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.038
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 13.1, z: -1.63, r: 25.5, estimated: false }  # 전문 지식
  reasoning: { s: 12.2, z: -1.52, r: 27.2, estimated: false }  # 추론
  coding: { s: 1.2, z: -1.22, r: 31.7, estimated: false }  # 코딩
  agentic: { s: 10.8, z: -0.82, r: 37.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.3, z: -0.98, r: 35.3, estimated: false }  # 긴문맥
  instruction: { s: 23.2, z: -1.27, r: 30.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Llama 3.1 8B

Meta · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.035 · 출력 $0.065 · 혼합 $0.038/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 25.5 | -1.63 | 실측 | [[gpqa-diamond]] 25.9%×0.4, [[humanitys-last-exam]] 5.3%×0.3 |
| 추론 | 27.2 | -1.52 | 실측 | [[gpqa-diamond]] 25.9%×1.0, [[humanitys-last-exam]] 5.3%×1.0 |
| 코딩 | 31.7 | -1.22 | 실측 | [[terminal-bench]] 0.8%×0.5 |
| 에이전트 | 37.8 | -0.82 | 실측 | [[gdpval]] 380.0%×1.0, [[terminal-bench]] 0.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.3 | -0.98 | 실측 | [[aa-lcr]] 18.0%×1.0 |
| 지시 따르기 | 30.9 | -1.27 | 실측 | [[ifbench]] 28.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
