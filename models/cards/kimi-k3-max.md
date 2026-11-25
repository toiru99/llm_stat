---
type: Model
title: Kimi K3 (max)
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 38.8300616186551
context_window: 1048576
status: past
size_class: Large
params_b: 2800
is_reasoning: true
radar:
  knowledge: { s: 82.2, z: 1.72, r: 75.8, estimated: false }  # 전문 지식
  reasoning: { s: 75.0, z: 1.98, r: 79.7, estimated: false }  # 추론
  coding: { s: 86.5, z: 1.53, r: 73.0, estimated: false }  # 코딩
  agentic: { s: 87.6, z: 1.43, r: 71.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.0, z: 0.85, r: 62.8, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.3, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Kimi K3 (max)

Kimi · Open · Large(2800B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 38.8300616186551 t/s · TTFT 6.97936698353053s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 75.8 | +1.72 | 실측 | [[gpqa-diamond]] 93.5354%×0.4, [[humanitys-last-exam]] 46.8953%×0.3 |
| 추론 | 79.7 | +1.98 | 실측 | [[critpt]] 23.4286%×1.0, [[gpqa-diamond]] 93.5354%×1.0, [[humanitys-last-exam]] 46.8953%×1.0 |
| 코딩 | 73.0 | +1.53 | 실측 | [[scicode]] 59.4907%×1.0 |
| 에이전트 | 71.4 | +1.43 | 실측 | [[gdpval]] 1542.46 Elo×1.0, [[tau3-banking]] 45.9794%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.8 | +0.85 | 실측 | [[mmmu-pro]] 80.5202%×1.0 |
| 긴문맥 | 69.4 | +1.3 | 실측 | [[aa-lcr]] 88.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
