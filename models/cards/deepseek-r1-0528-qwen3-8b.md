---
type: Model
title: DeepSeek R1 0528 Qwen3 8B
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32768
status: past
size_class: Small
params_b: 8.2
is_reasoning: true
radar:
  knowledge: { s: 36.8, z: -0.48, r: 42.7, estimated: false }  # 전문 지식
  reasoning: { s: 22.0, z: -0.65, r: 40.2, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.31, r: 30.4, estimated: false }  # 코딩
  agentic: { s: 1.1, z: -1.62, r: 25.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.9, z: -1.25, r: 31.3, estimated: false }  # 긴문맥
  instruction: { s: 10.9, z: -1.64, r: 25.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 0528 Qwen3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# DeepSeek R1 0528 Qwen3 8B

DeepSeek · Open · Small(8.2B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.7 | -0.48 | 실측 | [[gpqa-diamond]] 61.2121%×0.4, [[humanitys-last-exam]] 5.93142%×0.3 |
| 추론 | 40.2 | -0.65 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 61.2121%×1.0, [[humanitys-last-exam]] 5.93142%×1.0 |
| 코딩 | 30.4 | -1.31 | 실측 | [[terminal-bench]] 1.51515%×0.5 |
| 에이전트 | 25.7 | -1.62 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 1.51515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.3 | -1.25 | 실측 | [[aa-lcr]] 15%×1.0 |
| 지시 따르기 | 25.3 | -1.64 | 실측 | [[ifbench]] 19.8639%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
