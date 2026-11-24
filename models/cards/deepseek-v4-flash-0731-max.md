---
type: Model
title: DeepSeek V4 Flash 0731 (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0756
output_speed_tps: 138.732414114131
context_window: 1000000
status: past
size_class: Large
params_b: 284
is_reasoning: true
radar:
  knowledge: { s: 75.5, z: 1.4, r: 70.9, estimated: false }  # 전문 지식
  reasoning: { s: 63.8, z: 1.42, r: 71.3, estimated: false }  # 추론
  coding: { s: 71.4, z: 1.02, r: 65.4, estimated: false }  # 코딩
  agentic: { s: 78.8, z: 1.12, r: 66.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash 0731 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V4 Flash 0731 (max)

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.0756/1M · 138.732414114131 t/s · TTFT 1.52027557278331s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.9 | +1.4 | 실측 | [[gpqa-diamond]] 90.8081%×0.4, [[humanitys-last-exam]] 38.5542%×0.3 |
| 추론 | 71.3 | +1.42 | 실측 | [[critpt]] 16.5714%×1.0, [[gpqa-diamond]] 90.8081%×1.0, [[humanitys-last-exam]] 38.5542%×1.0 |
| 코딩 | 65.4 | +1.02 | 실측 | [[scicode]] 50.3472%×1.0 |
| 에이전트 | 66.8 | +1.12 | 실측 | [[gdpval]] 1436.82 Elo×1.0, [[tau3-banking]] 39.3814%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 79.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
