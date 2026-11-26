---
type: Model
title: DeepSeek R1 Distill Llama 70B
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.77
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 70
is_reasoning: true
radar:
  knowledge: { s: 22.5, z: -1.18, r: 32.3, estimated: false }  # 전문 지식
  reasoning: { s: 13.6, z: -1.07, r: 33.9, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.31, r: 30.4, estimated: false }  # 코딩
  agentic: { s: 12.2, z: -1.23, r: 31.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.3, z: -1.42, r: 28.7, estimated: false }  # 긴문맥
  instruction: { s: 21.7, z: -1.2, r: 32.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Llama 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# DeepSeek R1 Distill Llama 70B

DeepSeek · Open · Medium(70B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $1.4 · 혼합 $0.77/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 32.3 | -1.18 | 실측 | [[gpqa-diamond]] 40.202%×0.4, [[humanitys-last-exam]] 5.13%×0.3 |
| 추론 | 33.9 | -1.07 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 40.202%×1.0, [[humanitys-last-exam]] 5.13%×1.0 |
| 코딩 | 30.4 | -1.31 | 실측 | [[terminal-bench]] 1.51515%×0.5 |
| 에이전트 | 31.5 | -1.23 | 실측 | [[tau2-bench]] 21.9298%×1.0, [[terminal-bench]] 1.51515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.7 | -1.42 | 실측 | [[aa-lcr]] 10%×1.0 |
| 지시 따르기 | 32.1 | -1.2 | 실측 | [[ifbench]] 27.551%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
