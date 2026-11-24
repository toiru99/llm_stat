---
type: Model
title: DeepSeek V3.1 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.531
output_speed_tps: 76.0363294005468
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: false
radar:
  knowledge: { s: 45.4, z: -0.07, r: 49.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.4, r: 44.0, estimated: false }  # 추론
  coding: { s: 36.8, z: -0.14, r: 47.8, estimated: false }  # 코딩
  agentic: { s: 35.9, z: -0.39, r: 44.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 53.0, z: -0.15, r: 47.8, estimated: false }  # 긴문맥
  instruction: { s: 36.1, z: -0.6, r: 41.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V3.1 (non-reasoning)

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.53 · 출력 $1.5899999999999999 · 혼합 $0.531/1M · 76.0363294005468 t/s · TTFT 2.87423066772063s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.0 | -0.07 | 실측 | [[gpqa-diamond]] 73.5354%×0.4, [[humanitys-last-exam]] 6.67285%×0.3 |
| 추론 | 44.0 | -0.4 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 73.5354%×1.0, [[humanitys-last-exam]] 6.67285%×1.0 |
| 코딩 | 47.8 | -0.14 | 실측 | [[terminal-bench]] 24.2424%×0.5 |
| 에이전트 | 44.1 | -0.39 | 실측 | [[tau2-bench]] 34.7953%×1.0, [[terminal-bench]] 24.2424%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.8 | -0.15 | 실측 | [[aa-lcr]] 47%×1.0 |
| 지시 따르기 | 41.1 | -0.6 | 실측 | [[ifbench]] 37.8231%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
