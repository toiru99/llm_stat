---
type: Model
title: DeepSeek V3.1 Terminus (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 1.6992
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: false
radar:
  knowledge: { s: 47.6, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 28.6, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 42.9, z: -0.15, r: 47.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.1, z: -0.2, r: 47.0, estimated: false }  # 긴문맥
  instruction: { s: 40.9, z: -0.4, r: 44.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 Terminus (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# DeepSeek V3.1 Terminus (non-reasoning)

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $1.635 · 출력 $2.75 · 혼합 $1.6992/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[gpqa-diamond]] 75.0505%×0.4, [[humanitys-last-exam]] 8.66543%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 75.0505%×1.0, [[humanitys-last-exam]] 8.66543%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 31.8182%×0.5 |
| 에이전트 | 47.8 | -0.15 | 실측 | [[tau2-bench]] 37.1345%×1.0, [[terminal-bench]] 31.8182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.0 | -0.2 | 실측 | [[aa-lcr]] 45.3333%×1.0 |
| 지시 따르기 | 44.0 | -0.4 | 실측 | [[ifbench]] 41.2245%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
