---
type: Model
title: DeepSeek R1 Distill Llama 70B
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.74
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 22.8, z: -1.17, r: 32.4, estimated: false }  # 전문 지식
  reasoning: { s: 20.8, z: -1.12, r: 33.2, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.14, r: 32.9, estimated: false }  # 코딩
  agentic: { s: 3.0, z: -1.07, r: 33.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.2, z: -1.23, r: 31.5, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.26, r: 31.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Llama 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# DeepSeek R1 Distill Llama 70B

DeepSeek · Open · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.7 · 출력 $1.1 · 혼합 $0.74/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.4 | -1.17 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.2 | -1.12 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.9 | -1.14 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 33.9 | -1.07 | 실측 | [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.5 | -1.23 | 실측 | [[aa-lcr]] 10.0%×1.0 |
| 지시 따르기 | 31.0 | -1.26 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
