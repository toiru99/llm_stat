---
type: Model
title: DeepSeek V3.2
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1078
output_speed_tps: 27.375797226974
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 62.8, z: 0.78, r: 61.7, estimated: false }  # 전문 지식
  reasoning: { s: 42.0, z: 0.34, r: 55.1, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.44, r: 56.6, estimated: false }  # 코딩
  agentic: { s: 64.7, z: 0.62, r: 59.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.7, z: 0.77, r: 61.5, estimated: false }  # 긴문맥
  instruction: { s: 68.2, z: 0.74, r: 61.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# DeepSeek V3.2

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.1078/1M · 27.375797226974 t/s · TTFT 3.56468987271948s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 61.7 | +0.78 | 실측 | [[gpqa-diamond]] 84.0404%×0.4, [[humanitys-last-exam]] 24.5598%×0.3 |
| 추론 | 55.1 | +0.34 | 실측 | [[critpt]] 2.85714%×1.0, [[gpqa-diamond]] 84.0404%×1.0, [[humanitys-last-exam]] 24.5598%×1.0 |
| 코딩 | 56.6 | +0.44 | 실측 | [[terminal-bench]] 35.6061%×0.5 |
| 에이전트 | 59.3 | +0.62 | 실측 | [[gdpval]] 698.45 Elo×1.0, [[tau2-bench]] 90.6433%×1.0, [[terminal-bench]] 35.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.5 | +0.77 | 실측 | [[aa-lcr]] 73.3333%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 실측 | [[ifbench]] 60.6803%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
