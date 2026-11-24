---
type: Model
title: DeepSeek V3.2 Speciale
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 67.3, z: 1.0, r: 64.9, estimated: false }  # 전문 지식
  reasoning: { s: 49.3, z: 0.7, r: 60.6, estimated: false }  # 추론
  coding: { s: 52.9, z: 0.4, r: 56.0, estimated: false }  # 코딩
  agentic: { s: 26.4, z: -0.73, r: 39.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 72.7, z: 0.92, r: 63.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 Speciale
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V3.2 Speciale

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.9 | +1.0 | 실측 | [[gpqa-diamond]] 87.0707%×0.4, [[humanitys-last-exam]] 28.7303%×0.3 |
| 추론 | 60.6 | +0.7 | 실측 | [[critpt]] 7.42857%×1.0, [[gpqa-diamond]] 87.0707%×1.0, [[humanitys-last-exam]] 28.7303%×1.0 |
| 코딩 | 56.0 | +0.4 | 실측 | [[terminal-bench]] 34.8485%×0.5 |
| 에이전트 | 39.1 | -0.73 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 34.8485%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 70%×1.0 |
| 지시 따르기 | 63.9 | +0.92 | 실측 | [[ifbench]] 63.8776%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
